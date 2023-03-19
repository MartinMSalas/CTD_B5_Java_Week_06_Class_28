window.onload = function() {
  let data = {
    image_id: "asf2",
    sub_id: "my-user-1234",
    value: 1
  }

  let settings = {
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "x-api-key": "live_lIoBP81UbDSM4mBMVX56wH9rDAMo8yTXXplxEqKSjZOjvgYfWv0FnVaq0q4X8T87"
    },
    "body": JSON.stringify(data)
  }

  fetch("https://api.thecatapi.com0/v1/votes", settings)
    .then(function(response){
      return response.json();
    }).then(function(info){
      console.log(info)
    }).catch(function(e) {
      console.log("Error! " + e);
    })
}