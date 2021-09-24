async function f()
{
   let promise = new Promise(resolve => {
    setTimeout(() => resolve("Resolved!"), 3000)
} );
let resolve = await promise.then((resolve) => alert("Response value is:  "+resolve));
}
f().then();