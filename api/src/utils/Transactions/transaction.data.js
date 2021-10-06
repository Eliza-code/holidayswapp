const { Transaction } = require("../../db");

const transactionHistory = async () => {
    try {
        await Transaction.create({
            transactionCode: "AGREEMENT1",
            userId_1: 8,
            userId_2: 3,
        });
        await Transaction.create({
            transactionCode: "AGREEMENT1",
            userId_1: 8,
            userId_2: 3,
        });
        await Transaction.create({
            transactionCode: "AGREEMENT1",
            userId_1: 8,
            userId_2: 3,
        });
        await Transaction.create({
            transactionCode: "AGREEMENT1",
            userId_1: 8,
            userId_2: 3,
        });
        await Transaction.create({
            transactionCode: "AGREEMENT1",
            userId_1: 8,
            userId_2: 3,
        });
        await Transaction.create({
            transactionCode: "AGREEMENT1",
            userId_1: 8,
            userId_2: 3,
        });
        await Transaction.create({
            transactionCode: "AGREEMENT1",
            userId_1: 8,
            userId_2: 3,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    transactionHistory,
};