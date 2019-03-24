// Given a linked list, remove the n-th node from the end of list and return its head.

class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
};

const removeNthFromEnd = (head, n) => {

    let counter = 0;
    let first = head;
    
    // get number of nodes in linked list
    for (let node = first; node.next !== null; node = node.next){
        counter += 1
    }
    
    const nodeIndex = counter - n + 1
    let counter2 = 0;

    for (let node = first; node.next !== null; node = node.next){
        
        if (counter2 + 1 === nodeIndex){
            node.next = node.next.next
            return head
        }
        counter2 += 1; 
    }
};

n1 = new ListNode(1)
n2 = new ListNode(2)
n3 = new ListNode(3)
n4 = new ListNode(4)
n5 = new ListNode(5)
n6 = new ListNode(6)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5
n5.next = n6