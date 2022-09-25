let row = 0
let td = new Date()

// get id timeBlock element
let timeBlocks = $('#timeBlocks')
for (let i = 9; i <= 17; i++) {
  let time = i
  // grabs the current hour for our current time so that whenever a certain time hits it'll change the background color
  let currentTime = `${td.getHours()}`
  let backgroundColor = ''

  if (time < currentTime) {
    backgroundColor = 'light'
  } else if (time == currentTime) {
    backgroundColor = 'danger'
  } else {
    backgroundColor = 'success'
  }

  // change clock format to 12 hours and determine if its AM or PM
  if (i < 12) {
    time += ' AM'
  } else if (i == 12) {
    time += ' PM'
  } else {
    time -= 12
    time += ' PM'
  }

  /*
    if i try to find the value inside of my local storage for that row is empty -> i display nothing
    else there is a value and i want to display it
   */
  let text
  if (localStorage.getItem(row) === null) {
    text = ''
  } else {
    text = localStorage.getItem(row)
  }

  timeBlocks.append(`
    <div class="d-flex col-12">
      <div class="col-2 timeOfDay"> ${time}</div>
      <textarea id="text" class="col-9 border time-block p-4 mb-2 bg-${backgroundColor} text-black">${text}</textarea>
      <button class="saveBtn col-1 border justify-content-center d-flex align-items-center" data-row=${row}>
        <i type="submit" class="fas fa-save"></i>
      </button>
    </div>
  `)
  // increase row for next row
  row += 1
}
let saveButton = $('.saveBtn')

saveButton.on('click', function (event) {
  event.preventDefault()
  // find which row was clicked
  let rowNumberClicked = $(this).attr('data-row')
  console.log($(this).attr('data-row'))

  // find the row
  let row = timeBlocks.children().eq(rowNumberClicked)

  // get the textarea val for that row
  let textAreaForRow = row.children('textarea').val()

  if (textAreaForRow !== '') {
    // save text area of that row into local storage where the key is the index of the row and the value is the content of the text area
    localStorage.setItem(rowNumberClicked, textAreaForRow)
  }
})

//displays current day
let today = moment()
$('#datetime').text(today.format('MMM Do, YYYY'))

let dateTime = $('#datetime')
dateTime.css('font-weight', 'bolder')
