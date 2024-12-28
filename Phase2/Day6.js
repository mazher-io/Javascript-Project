// Simulated Task Manager with Multiple Async Operations

console.log('Task started...');

// 1. Using setTimeout and setInterval
setTimeout(() => {
    console.log('Step 1: Timeout completed (2s)');
}, 2000);

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Step 2: Interval ${count}`);
    if (count === 3) clearInterval(intervalId); // Stops after 3 executions
}, 1000);

// 2. Callback function for Async Task
function fetchData(callback) {
    console.log('Step 3: Fetching data...');
    setTimeout(() => {
        callback('Data fetched!');
    }, 1500);
}

fetchData((result) => {
    console.log('Step 4:', result);

    // 3. Promise Example
    const processData = new Promise((resolve, reject) => {
        console.log('Step 5: Processing data...');
        setTimeout(() => {
            const success = true; // Simulate success or failure
            success ? resolve('Data processed!') : reject('Processing failed!');
        }, 1000);
    });

    processData
        .then((processed) => {
            console.log('Step 6:', processed);
        })
        .catch((error) => {
            console.log('Error:', error);
        })
        .finally(() => {
            console.log('Step 7: Process finished');
        });
});


async function asyncTask() {
    try {
        console.log('Step 8: Starting async tasks...');
        const data = await new Promise((resolve) => setTimeout(() => resolve('Async Data'), 1000));
        console.log('Step 9:', data);

        const result = await new Promise((resolve) => setTimeout(() => resolve('Async Processed Data'), 1000));
        console.log('Step 10:', result);
    } catch (error) {
        console.log('Error:', error);
    } finally {
        console.log('Step 11: Async tasks completed');
    }
}

asyncTask();

console.log('Task queued... Waiting for async operations...');
