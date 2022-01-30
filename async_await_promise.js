/* Payment */

const buyerInfo = () => {
  const buyerInfoPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Customer info has completed!");
    }, 2000);
  });
  return buyerInfoPromise;
};

const checkPaymentCard = () => {
  const paymentPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Selected Payment is avaiable!");
    }, 2000);
  });
  return paymentPromise;
};

const selectedProductInfo = () => {
  const seletedProductInfoPrmise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Your product has been saved from the cart.");
    }, 2000);
  });
  return seletedProductInfoPrmise;
};

const shippingAddress = () => {
  const shippingAddressPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Shipping address has been saved");
    }, 4000);
  });
  return shippingAddressPromise;
};

const discoutCuponCheck = () => {
  const discoutCuponForUserA = true;
  const discountArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const checkCuponPromise = new Promise((resolve, reject) => {
    if (discoutCuponForUserA) {
      setTimeout(() => {
        resolve(`Discount Cupon can be appiled! ${discountArray[1]}%`);
      }, 2000);
    } else {
      setTimeout(() => {
        reject("Your Cupon Code is expired!");
      }, 2000);
    }
  });
  return checkCuponPromise;
};

const loadData = () => {
  return new Promise((resolve, reject) => {
    resolve("Checking all the inputed data and saved to Cloud!");
  }, 3000);
};

const transactionInfo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Transaction has been done! ");
    }, 4000);
  });
};

const returnHomeTab = (transaction) => {
  console.log(transaction, "Showing back to Home Feed...");
};

const appiledTransactionUI = async () => {
  const buyerData = await buyerInfo();
  console.log(buyerData);
  const paymentCardData = await checkPaymentCard();
  console.log(paymentCardData);
  const products = await selectedProductInfo();
  console.log(products);
  const shipping = await shippingAddress();
  console.log(shipping);
  const discountCupon = await discoutCuponCheck();
  console.log(discountCupon);
  const fetchAllData = await loadData();
  console.log(fetchAllData);
  const transcationData = await transactionInfo();
  returnHomeTab(transcationData);
};

appiledTransactionUI().catch((err) => {
  console.log("Inside catch...", err);
});
