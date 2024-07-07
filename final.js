/**
 * Contains of to-do list items
 * @type {Array<{
 *  number: Number;
 *  id: Number;
 *  description1: string;
 *  intime: boolean;
 *  late: boolean;
 *  absent: boolean;
 * }>}
 */
//  const it = localStorage.items ? JSON.parse(localStorage.items) : [];

const items = [
    {
        number: 1,
        id: 123,
        description1: "Dala Bilal",
        intime: false,
        late: false,
        notFound: false

    },
    {
        number: 2,
        id: 124,
        description1: "Rahaf Bilal",
        intime: false,
        late: false,
        notFound: false

    },

];
mypopup.style.display = "none";
firstPopup.style.display = "none";
const col = [
    'rgb(180, 220, 207)',
    'rgb(237, 216, 216)',
    'rgb(219, 220, 180)'
];

let counter = 3;

function createItem1() {
    const taskDescription = document.getElementById('taskDescription');

    const taskDescription1 = document.getElementById('taskDescription1');

    const taskDescription2 = document.getElementById('taskDescription2');

    // const number1 = taskDescription.value;

    const number2 = taskDescription.value;

    const firstName = taskDescription1.value;

    const lastName = taskDescription2.value;

    const description1 = firstName + " " + lastName;
    if((number2 === '') || (lastName === " ") || (firstName === " ") || (description1 === " ")) {
        taskDescription.value = '';

        taskDescription1.value = '';
    
        taskDescription2.value = '';
        window.alert(`Pleas fill the information of the student`);
        return;
    }
    items.push({
        number: counter,
        id: number2,
        description1: description1,
        intime: false,
        late: false,
        notFound: false
    });

    taskDescription.value = '';

    taskDescription1.value = '';

    taskDescription2.value = '';
    counter++;
    renderList();
};
let readNumofSt = 0;
const save = document.getElementById('save');
const label = document.getElementsByTagName('label');
const AddStudent = () => {

    const CountSt = document.getElementById('CountSt');
    const numOfstudent = CountSt.value;
    readNumofSt = numOfstudent;
    for (let j = 0; j < numOfstudent; j++) {
        const mypopup = document.getElementById('mypopup');
        mypopup.style.display = "flex";
        save.style.display = "none";
    }

    if (numOfstudent == 1) {
        const mypopup = document.getElementById('mypopup');
        mypopup.style.display = "flex";
        push.style.display = "none";
        save.style.display = "flex";
        save.onclick = createItem1;
        return;
    }
    else {
        push.style.display = "flex";
    }

    // renderList(); 
    CountSt.value = '';
}
let AddS = 0;
const exit2 = document.getElementById('exit2');
const exit = document.getElementById('exit');
const push = document.getElementById('push');
exit.style.display = "flex";

const PushTo = () => {
    createItem();
    for (let i = 0; i < readNumofSt; i++) {
        const mypopup = document.getElementById('mypopup');

        mypopup.style.display = "flex";

        save.style.display = "none";

        console.log("999", AddS, i);

        if (i === readNumofSt - 1 && AddS === readNumofSt - 1) {
            console.log("im here");
            save.style.display = "flex";
           
            push.style.display = "none";
            const saVe = window.alert(`Now u Enter All Student Pleas Save`);
            AddS = 0;
            CountSt.value = '';
            return;
        }
    }
    CountSt.value = '';
    AddS++;
}
function createItem() {
    const taskDescription = document.getElementById('taskDescription');

    const taskDescription1 = document.getElementById('taskDescription1');

    const taskDescription2 = document.getElementById('taskDescription2');

    // const number1 = taskDescription.value;

    const number2 = taskDescription.value;

    const firstName = taskDescription1.value;

    const lastName = taskDescription2.value;

    const description1 = firstName + " " + lastName;
    
    items.push({
        number: counter,
        id: number2,
        description1: description1,
        intime: false,
        late: false,
        notFound: false
    });
    
    if((number2 === '') || (lastName === " ") || (firstName === " ") || (description1 === " ")) {
        window.alert(`Pleas fill the information of the student`);
        taskDescription.value = '';

        taskDescription1.value = '';

       taskDescription2.value = '';
        AddS = 0;
        return;
    }
    taskDescription.value = '';

    taskDescription1.value = '';

    taskDescription2.value = '';

    counter++;
};
push.onclick = PushTo;
const Next = () => {
    const mypopup = document.getElementById('mypopup');
    mypopup.style.display = "flex";
}
const Add = () => {
    const mypopup = document.getElementById('mypopup');
    const firstPopup = document.getElementById('firstPopup');
    firstPopup.style.display = "flex";
}


function exitB() {
    firstPopup.style.display = "none";
    mypopup.style.display = "none";
    CountSt.value = '';
}
let cutP = 0;
let cutL = 0;
let cutA = 0;
const countPresent = document.getElementById('countPresent');
const countAbsent = document.getElementById('countAbsent');
const countLate = document.getElementById('countLate');
/**
 * Update the present status value for provided index
 * @param {Number} index Item index
 */
const updatepresent = (index) => {
    console.log("updatepresent" , index);
    items[index].intime = !items[index].intime;
    if (items[index].intime) {
        cutP++;
        countPresent.innerHTML = cutP;
    }
    else {
        cutP--;
        countPresent.innerHTML = cutP;
    }
    console.log('updatepresent', index);
    renderList();
};
const updatelate = (index) => {
    console.log("updatelate" , index);
    items[index].late = !items[index].late;
    if (items[index].late) {
        cutL++;
        countLate.innerHTML = cutL;
    }
    else {
        cutL--;
        countLate.innerHTML = cutL;
    }
    // console.log('updatepresent', index);
    renderList();

};
const updateabsent = (index) => {
    console.log("updateabsent" , index);
    items[index].absent = !items[index].absent;
    if (items[index].absent) {
        cutA++;
        countAbsent.innerHTML = cutA;
    }
    else {

        cutA--;
        countAbsent.innerHTML = cutA;
    }
    // console.log('updatepresent', index);
    renderList();

};
const clearAll = document.getElementById('clearAll');
function rest() {
    // console.log("im here");
    items.forEach((item, index) => {
        // console.log("im here2");
        if (items[index].intime === true) {
            items[index].intime = false;
            cutP = 0;
        }
        else if (items[index].absent === true) {
            items[index].absent = false
            cutA = 0;
        }
        else if (items[index].late === true) {
            items[index].late = false;
            cutL = 0;
        }
        countPresent.innerHTML = " ";
        countAbsent.innerHTML = " ";
        countLate.innerHTML = " ";
        
    });
    renderList();
}
clearAll.onclick = rest;

const renderList = () => {
    const addRow = document.getElementById('addRow');
    addRow.innerHTML = '';
    //  index = 3;
    items.forEach((item, index) => {
        console.log("rederlist", index);

        const add = `
        <tr ${item.intime ? 'class="present"' : ''}  ${item.late ? 'class="lat"' : ''} ${item.absent ? 'class="abs"' : ''} >
            <td>${item.number}</td>
            <td>${item.id}</td>
            <td>${item.description1}</td>
            <td class="widthFortd"><button class="button1 emojiSize" onclick="updatepresent(${index})">&#9989;</button></td>
            <td class="widthFortd"><button class="button2 emojiSize" onclick="updateabsent(${index})">&#128683;</button></td>
            <td class="widthFortd"><button class="button3 emojiSize" onclick="updatelate(${index})">&#128339;</button></td>
        </tr> `
        addRow.innerHTML += add;
    });
    exitB();
};
// function storeItems() {
//     localStorage.it = JSON.stringify(it);
// }
save.onclick = renderList;
// var csv_data = [];
function saveCSV () {
    // (A) ARRAY OF DATA
    var items2D = [];
    var items2D2 = [];
    for(let i = 0 ; i < items.length ; i++) {
        if(items[i].intime === true) {
            items[i].intime = "Present";
            items[i].late = " ";
            items[i].absent = " ";
        }
        if(items[i].late === true) {
            items[i].late = "Late";
            items[i].intime = " ";
            items[i].absent = " ";
        }
        if(items[i].absent === true) {
            items[i].absent = "Absent";
            items[i].late = " ";
            items[i].intime = " ";
        }
    }
   items.forEach((item) => {
        items2D = [item.number , item.id , item.description1, item.intime , item.late ,item.absent];
        items2D2.push(items2D);
   });
    // (B) ARRAY TO CSV STRING
    var csv = "";
    for (let row of items2D2) {
      for (let col of row) { csv += col + ","; }
      csv += "\r\n";
    }
   
    // (C) CREATE BLOB OBJECT
    var myBlob = new Blob([csv], {type: "text/csv"});
   
    // (D) CREATE DOWNLOAD LINK
    var url = window.URL.createObjectURL(myBlob);
    var anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "demo.csv";
   
    // (E) "FORCE DOWNLOAD"
    // NOTE: MAY NOT ALWAYS WORK DUE TO BROWSER SECURITY
    // BETTER TO LET USERS CLICK ON THEIR OWN
    anchor.click();
    window.URL.revokeObjectURL(url);
    anchor.remove();
  }
//   async function saveCSV () {
//     // (A) ARRAY OF DATA
//     var items2D = []
//     items.forEach((item) => {
//         if(item.intime === true) {
//           items2D[item.intime] = "present";
//           items2D[item.late] = " ";
//           items2D[item.absent] = " ";
//         }
//         else if(item.late === true) {
//            items2D[item.late] = "Late";
//            items2D[item.intime] = " ";
//            items2D[item.absent] = " ";
//         }
//         else if(item.absent === true) {
//            items2D[item.late] = " ";
//            items2D[item.intime] = " ";
//            items2D[item.absent] = "Absent";
//         }
        
//          items2D = [item.number , item.id , item.description1];
      
//     });
//     // (B) ARRAY TO CSV STRING
//     var csv = "";
//     for (let row of items2D) {
//       for (let col of items2D) { csv += col + ","; }
//       csv += "\r\n";
//     }
   
//     // (C) CREATE BLOB OBJECT
//     var myBlob = new Blob([csv], {type: "text/csv"});
   
//     // (D) FILE HANDLER & FILE STREAM
//     const fileHandle = await window.showSaveFilePicker({
//       suggestedName : "demo.csv",
//       types: [{
//         description: "CSV file",
//         accept: {"text/csv": [".csv"]}
//       }]
//     });
//     const fileStream = await fileHandle.createWritable();
   
//     // (E) WRITE FILE
//     await fileStream.write(myBlob);
//     await fileStream.close();
//   }



