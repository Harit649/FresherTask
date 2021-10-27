class Node{
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}  

class Linkedlist{
    constructor(head,tail,size) {
        this.head = null;
        this.tail = null;
        this.size = 0; 
    }

    // insert node at first...

    InsertFirstAt(data) {
        this.head = new Node(data,this.head);
    }

    // print List Data...

    PrintListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Remove at Index...

    removeAt(index) {
        // if(index > 0 && index > this.size) {
        //     return;
        // }
    
        let current = this.head;
        let previous;
        let count = 0;

        // remove first 
        if(index === 0) {
            this.head = current.next;
        }
        else
        {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }

            previous.next = current.next;
        }
        this.size--;
    }   
}

const ll = new Linkedlist();

ll.InsertFirstAt(100);
ll.InsertFirstAt(200);
ll.InsertFirstAt(300);
ll.InsertFirstAt(400);

ll.removeAt(2);
ll.PrintListData();
// console.log(ll);