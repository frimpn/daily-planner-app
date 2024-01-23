



let date = dayjs().format("[Today's date:] DD/MM/YYYY ")


let times = ['9', '10', '11', '12','13','14', '15', '16', '17']

$('#currentDay').text(date)


for(let i =0 ; i < times.length; i++){

   let divs = $('<div>')

   $(divs).addClass('row ')
   

   let divs2 = $('<div>')

   divs2.addClass('col-lg-2 col-md-2  flex hour')
   divs2.text(times[i])
   



   let textAreaDiv = $('<div>')
   textAreaDiv.addClass('col-lg-8 col-md-8 flex')

   let textArea = $('<textarea>')


   textArea.addClass('textarea time-block ' )
   textArea.attr('data-num', times[i])

   let buttonDiv = $('<div>')

   buttonDiv.addClass('col-lg-2 col-md-2 flex')

   let btn = $('<button>')
$(btn).text('save')

   btn.addClass('saveBtn')


$('.container').append(divs)
$(divs).append(divs2)
$(textAreaDiv).append(textArea)
$(divs).append(textAreaDiv)

$(divs).append(buttonDiv)
$(buttonDiv).append(btn)


}


let currenTime = parseInt(dayjs().format('H'))
console.log(typeof(currenTime))



$('.time-block').each(function(){


    let time = parseInt($(this).attr('data-num'))

    if(time < currenTime){
        $(this).addClass('past')
    }else if(time === currenTime){
        $(this).addClass('present')
    }else{
        $(this).addClass('future')
    }

})



