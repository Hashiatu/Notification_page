  
                function sendMessage(){
                    const input = document.getElementById("input");
                    const button = document.getElementById("button");
                    const status = document.getElementById("status");

                    // button.addEventListener("click");
                    const message = input.value;
                    if (message) {
                        document.body.innerHTML += `<p>${message}</p>`;
                        input.value = ''; // Clear the input field
                    } else {
                        alert("Please enter a message.");
                    }
                    // console.log(message)
                }
            