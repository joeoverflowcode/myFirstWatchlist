import { Model, DataTypes } from 'sequelize'
import util from 'util'
import connectToDB from './db.js'


export const db = await connectToDB('postgressql:///stock')

export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

export class Stock_List extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

export class Stock extends Model {
    [util.inspect.custom]() {
        return this.toJSON()
    }
}

User.inti(
    {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull:false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        modelName: 'user',
        sequelize: db,
    },
)

Stock_List.init(
    {
        stock_list_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true,
        },
        user_id: {
            type: DataTypes.INTEGER,

        },
    },
    {
        modelName: 'stock_lists',
        sequelize: db,
    }
)

Stock.init(
    {
        stock_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
        },
        stock_symbol: {
            type: DataTypes.STRING,
        },
        stock_list_id: {
            type: DataTypes.INTEGER,
        },
    },
    {
        modelName: 'stock',
        sequelize: db,
    }
)


Stock_List.belongsTo(User, { foreignKey: 'user_id' });

Stock_List.hasMany(Stock, { foreignKey: 'stock_list_id' });
Stock.belongsTo(Stock_List, { foreignKey: 'stock_list_id' });

await db.sync({ force: true })

const testUser = await User.create({ email: 'test@email.com', user_name: 'jojo22', password: 'test'})

console.log(testUser)