const { connect } = require("./index");

async function createPayment({ paymentType, paymentAmount, product }) {
  const { db, dbo } = await connect();
  const collection = dbo.collection("payments");

  let result = await collection.insertOne({
    paymentType,
    paymentAmount,
    product,
    timestamp: Date.now()
  });

  db.close();
  return result;
}

async function getPayments() {
  const { db, dbo } = await connect();
  const collection = dbo.collection("payments");
  let result = await (await collection.find()).toArray();
  db.close();
  return result;
}

module.exports = { createPayment, getPayments };
