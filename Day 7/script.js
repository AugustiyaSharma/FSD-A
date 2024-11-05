async function fetchdata() {
    try {
        const response = await fetch("https://api.github.com/users?per_page=10");
        const data = await response.json();
        console.log(data);

        data.forEach(user => {
            let h1=document.createElement("h1");
            h1.textContent = user.login;

            let a = document.createElement("a");
            a.textContent = "Github Profile";
            a.setAttribute("href", user.html_url);

            let output = document.getElementById("top");
            output.appendChild(h1);
            output.appendChild(a);
        });
        

        document.getElementById("top").innerHTML =output;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}