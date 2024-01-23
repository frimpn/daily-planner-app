



let date = dayjs().format("[Today's date:] DD/MM/YYYY")

console.log(date)

let times = ['9am', '10am', '11am', '12pm','13pm','14pm', '15pm', '16pm', '17pm']

$('#currentDay').text(date)


for(let i =0 ; i < times.length; i++){

   let divs = $('<div>')

   $(divs).addClass('row ')
   

   let divs2 = $('<div>')

   divs2.addClass('col-lg-2 col-md-2  flex')
   divs2.text(times[i])



   let textAreaDiv = $('<div>')
   textAreaDiv.addClass('col-lg-8 col-md-8 flex')

   let textArea = $('<textarea>')


   textArea.addClass('textarea time-block ' )

   let buttonDiv = $('<div>')

   buttonDiv.addClass('col-lg-2 col-md-2 flex')

   let btn = $('<button>')
$(btn).text('save')

   btn.addClass('save-Btn')


$('.container').append(divs)
console.log($('.container'))
$(divs).append(divs2)
$(textAreaDiv).append(textArea)
$(divs).append(textAreaDiv)

$(divs).append(buttonDiv)
$(buttonDiv).append(btn)


}