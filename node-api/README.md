## ORM - Sequelize
#Criar migration no Sequelize
    yarn sequelize migration:create --name=create-users

#Rodar migrate no Sequelize
    yarn sequelize db:migrate
#Desfazer migrate no Sequelize --dev APENAS
    yarn sequelize db:migrate:undo
    yarn sequelize db:migrate:undo:all
