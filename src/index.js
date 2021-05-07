console.log(data);
// We create individual components here
// - You'll find a variable called data in the console.log. That's your list of dogs
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// Tips
// - Take advantage of scope in JS to have access to the data you need
// - Remember you can add event listeners to any element on the page

// Challenge
// You might have noticed there's a plus button at the beginning of the top row. Add the behaviour to it. When clicked, it should replace the main card with a form to add a new dog to the list. 
// You'll find a template for the form on the HTML page. Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.

//  create list with id
let ulEl= document.querySelector(".dogs-list")
let mainEl = document.querySelector('.main')


for (let i = 0; i<data.length; i++){
    let liEl = document.createElement('li')
    liEl.setAttribute('class', 'dogs-list__button')
    liEl.innerText = data[i].name

    liEl.addEventListener('click', function(){

        let sectionEl = document.querySelector('.main__dog-section')
        sectionEl.innerText = ''
        let h2El = document.createElement('h2')
        h2El.innerText = data[i].name
        let imgEl = document.createElement('img')
        imgEl.setAttribute('src', data[i].image)
        imgEl.setAttribute('style','width:400px; height:300px;')
        let biodivEl = document.createElement('div')
        let h3El = document.createElement('h3')
        h3El.innerText = 'bio'
        let pinfoEl = document.createElement('p')
        pinfoEl.innerText = data[i].bio
        let divconfimrEl = document.createElement('div')
        divconfimrEl.setAttribute('class', 'main__dog-section__btn')
        let emEl = document.createElement('em')
        emEl.innerText = 'Is naughty?'
        let pconfirmEl = document.createElement('p')
        let btbdog = document.createElement('button')
        function dog(){
            if (data[i].isGoodDog){return ' no'}
            else{ return " yes"}
        }
        pconfirmEl.innerText = dog()
        btbdog.innerText = data[i].isGoodDog ? 'good dog' : 'bad dog'
        btbdog.addEventListener('click', function (){
            data[i].isGoodDog = !data[i].isGoodDog
            btbdog.innerText = data[i].isGoodDog ? 'good dog' : 'bad dog'
            function dog2(){
                if (data[i].isGoodDog){ return ' no '}
                else{ return ' yes' } 
                }
                pconfirmEl.innerText = dog2()
                pconfirmEl.prepend(emEl)
            }
           
        )
        sectionEl.append(h2El,imgEl,biodivEl,divconfimrEl)
        biodivEl.append(h3El,pinfoEl)
        divconfimrEl.append(pconfirmEl,btbdog)
        pconfirmEl.prepend(emEl)
        
    })
    ulEl.append(liEl )
}
let linewEl = document.querySelector('.dogs-list__button--add')

linewEl.addEventListener('click', function (){

    let sectionEl = document.querySelector('.main__dog-section')
    sectionEl.innerText = ''
    let h2El = document.createElement('h2')
    h2El.innerText = 'Add a new Dog'

    let formEl = document.createElement('form')
    formEl.setAttribute('class','form')

    let nameLabel = document.createElement('label')
    nameLabel.innerText = "Dog's name"
    nameLabel.setAttribute('for','name')
    let nameinput = document.createElement('input')
    nameinput.setAttribute('type', 'text')
    nameinput.setAttribute('id', 'name')
    nameinput.setAttribute('name', 'name')
    nameinput.setAttribute('placeholder', ' put dog name')

    let imageLabel = document.createElement('label')
    imageLabel.innerText = "Dog's picture"
    imageLabel.setAttribute('for','image')
    let imageEl = document.createElement('input')
    imageEl.setAttribute('type','url')
    imageEl.setAttribute('id','image')
    imageEl.setAttribute('name','image')

    let biolabel = document.createElement('label')
    biolabel.innerText = "Dog's bio"
    biolabel.setAttribute('for','bio')
    let textEl = document.createElement('textarea')
    textEl.setAttribute('rows','5')
    textEl.setAttribute('id','bio')
    textEl.setAttribute('name','bio')

    let submitInput = document.createElement('input')
    submitInput.setAttribute('type','submit')
    submitInput.setAttribute('id','submit')
    submitInput.setAttribute('name','submit')
    submitInput.setAttribute('value',"Let's add a dog!")
    submitInput.setAttribute('class','form__button')
    formEl.append(nameLabel, nameinput, imageLabel,imageEl, biolabel, textEl,submitInput )
    sectionEl.append(h2El,formEl)

    formEl.addEventListener('submit', function (event){

        event.preventDefault()
        let liEl = document.createElement('li')
        liEl.setAttribute('class', 'dogs-list__button')
        liEl.innerText = formEl.name.value

        liEl.addEventListener('click', function(){
            let sectionEl = document.querySelector('.main__dog-section')
            sectionEl.innerText = ''
            let h2El = document.createElement('h2')
         
            h2El.innerText = formEl.name.value
            console.log(formEl.name.value)
            let imgEl = document.createElement('img')   
            imgEl.setAttribute('src', formEl.image.value)
            console.log(formEl.image.value)
            imgEl.setAttribute('style','width:400px; height:300px;')
            let biodivEl = document.createElement('div')
            let h3El = document.createElement('h3')
            h3El.innerText = 'bio'
            let pinfoEl = document.createElement('p')
            pinfoEl.innerText = formEl.bio.value
            let divconfimrEl = document.createElement('div')
            divconfimrEl.setAttribute('class', 'main__dog-section__btn')
            let emEl = document.createElement('em')
            emEl.innerText = 'Is naughty?'
            let pconfirmEl = document.createElement('p')
            let btbdog = document.createElement('button')
            
            pconfirmEl.innerText = ' yes'
            btbdog.innerText = 'good dog'
            btbdog.addEventListener('click', function (){
                btbdog.innerText = 'bad dog'
                pconfirmEl.innerText =' no'
                pconfirmEl.prepend(emEl) 
                }
            
            )
            sectionEl.append(h2El,imgEl,biodivEl,divconfimrEl)
            biodivEl.append(h3El,pinfoEl)
            divconfimrEl.append(pconfirmEl,btbdog)
            pconfirmEl.prepend(emEl)
            
    })
    ulEl.append(liEl)
    
}) 

})
