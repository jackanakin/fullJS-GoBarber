import { isBefore, subHours } from 'date-fns';

import Queue from '../../lib/Queue';
import CancellationsMail from '../jobs/CancellationMail';

import Appointment from '../models/Appointment';
import User from '../models/User';

class CancelAppointmentService {
    async run({ provider_id, user_id }) {
        const appointment = await Appointment.findByPk(provider_id, {
            include: [
                { model: User, as: 'provider', attributes: ['name', 'email'] },
                { model: User, as: 'user', attributes: ['name', 'email'] },
            ],
        });

        if (appointment.user_id !== user_id) {
            throw new Error("You don't have auth to delete this entry");
        }

        const dateWithSub = subHours(appointment.date, 2);

        if (isBefore(dateWithSub, new Date())) {
            throw new Error(
                'You can only cancel appointments 2 hours in advance!'
            );
        }

        appointment.canceled_at = new Date();

        await appointment.save();

        /**
         * Send -email
         */
        await Queue.add(CancellationsMail.key, {
            appointment,
        });
    }
}

export default new CancelAppointmentService();
