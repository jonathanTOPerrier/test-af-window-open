
document.querySelector('#login').addEventListener('click', (event) => {

    event.preventDefault();



    let ny_window = window.open('', 'testeren', 'width=300, height=200 ');
    ny_window.document.write(`<button id="knap">click mig</button>
    <script>
    
    let hej = 'hejsa';

        document.querySelector('#knap').addEventListener('click', () => {  

            window.opener.teksten(hej);

        window.close()});
        
        </script>`)

});

// window.opener.sessionStorage.setItem('test', 'sucess');


