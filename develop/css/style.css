let row = 0
let td = new Date()
let timeBlocks = $('#timeBlocks')
for (let i = 9; i <= 17; i++) {
  let time = i
  let currentTime = `${td.getHours()}` //selects the users current time
  let backgroundColor = '' // depending on the users time, the background color of the calendar events will change to inform the user

  if (time < currentTime) {
    backgroundColor = 'light'
  } else if (time == currentTime) {
    backgroundColor = 'danger'
  } else {
    backgroundColor = 'success'
  }
  // this set of if statements refactors the displayed time as the 12 hour system (includes AM and PM)
  if (i < 12) {
    time += ' AM'
  } else if (i == 12) {
    time += ' PM'
  } else {
    time -= 12
    time += ' PM'
  }

let currentDate = moment() // retrieves the current day of the users device and formats it in MMM DO YYYY format
$('#formatDate').text(currentDate.format('MMM Do, YYYY'))

let formatDate = $('#formatDate') // formats the display of the current day
formatDate.css('font-weight', 'bolder')   

  let text
  if (localStorage.getItem(row) === null) {
    text = ''
  } else {
    text = localStorage.getItem(row)
  }

  // changes the text and background color of the row/timeblock
  timeBlocks.append(`
    <div class="d-flex col-12">
      <div class="col-2 timeOfDay"> ${time}</div>
      <textarea id="text" class="col-9 border time-block p-4 mb-2 bg-${backgroundColor} text-black">${text}</textarea>
      <button class="saveBtn col-1 border justify-content-center d-flex align-items-center" data-row=${row}>
        <i type="submit" class="fas fa-save"></i>
      </button>
    </div>
  `)
  row += 1 // increases the value of the row, this will then select the next row
}
let saveButton = $('.saveBtn')

saveButton.on('click', function (event) {
  event.preventDefault()
  let clickedRow = $(this).attr('data-row') // determines which row has been clicked
  console.log($(this).attr('data-row'))

  let row = timeBlocks.children().eq(clickedRow) // retrieves the current row 

  let rowText = row.children('textarea').val()  // retrieves the text area of the selected row

  if (rowText !== '') {
    localStorage.setItem(clickedRow, rowText) // saves users text value into their local storage 
  }
})
