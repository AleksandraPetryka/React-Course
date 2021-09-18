// Są 2 sposoby obsługiwania asynchronicznego kodu

const DUMMY_DATA = {
  age: 22,
  name: 'Karol',
  hobby: 'Lubienie knorriga'
};

const mockRequest = () => Promise.resolve(() => DUMMY_DATA);


// Callbacki

const log = (data) => {
  console.log(`log: cos sie wykonuje`);
  console.log(`log: data = `, data);
}

const mockRequest2 = (callback) => {
  setTimeout(() => {
    // Tutaj pobieramy dane z backendu
    console.log(`log: timeout resolved`);
    callback(DUMMY_DATA);
  }, 1000);
}

setTimeout(() => {
  mockRequest2(log);
}, 5000);

// Promise'y

const ourPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`log: timeout resolved`);
    resolve(DUMMY_DATA);
    // reject(new Error('motyla noga'));
  }, 1000);
});

ourPromise
  .then((data) => {
    console.log(`log: ourPromise THEN`);
    console.log(`log: data = `, data);
    return 13;
  })
  .then((data2) => {
    console.log(`log: data2 = `, data2);
  })
  .catch(err => {
    console.log(`log: OUR PROMISE CATCH`);
    console.log(`log: err = `, err);
  })
  .finally(() => {

  });

const asyncShow = async () => {
  const { response } = await ourPromise();
}