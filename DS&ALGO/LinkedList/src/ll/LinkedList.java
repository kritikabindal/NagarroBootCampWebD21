package ll;

class LinkedList
{
 
private  class Node
{
	int data;
	Node next;
	
}
private Node head;
private Node tail;
private int size;

void display()
{
	Node temp=this.head;
	while(temp!=null)
	{
		System.out.println(temp.data +" ");
		temp=temp.next;
	}
}

/*add item in the end */
public void addLast(int item)
{
	Node nn=new Node();
	nn.data=item;
	nn.next=null;
	
	 //attachment
	if(this.size>=1)
	{
		this.tail.next=nn;
	}
	//summary object update
	if(this.size==0)
	{
		this.head=nn;
		this.tail=nn;
		this.size++;
	}
	else
	{
		this.tail=nn;
		this.size++;
	}
}

/*add item in the first*/

public void addFirst(int item)
{
	Node nn=new Node();
	nn.data=item;
	nn.next=null;
	
	//attachment
	if(this.size>=1)
	{
		nn.next=head;
	}
	//summary object update
	if(this.size==0)
	{
		this.head=nn;
		this.tail=nn;
		this.size++;
	}
	else
	{
		this.head=nn;
		this.size++;
	}
}

/*get the first item*/

public int getFirst() throws Exception
{
if(this.size==0)
{
	throw new Exception("LL is Empty");
}
return this.head.data;
}
/* get the Last item */

public int getLast() throws Exception
{
if(this.size==0)
{
	throw new Exception("LL is Empty");
}
return this.tail.data;
}

/*Get the item at the position*/

public int getAt(int idx) throws Exception 
{
	if(this.size==0)
	{
		throw new Exception("LL is Empty");
	}
	if(idx<0|| idx>=this.size)
	{
		throw new Exception("Invalid Index");
	}
	Node temp=this.head;
	for(int i=1;i<=idx;i++)
	{
		temp=temp.next;
	}
	return temp.data;
}

/* Get the node at the position */

public Node getNodeAt(int idx) throws Exception 
{
	if(this.size==0)
	{
		throw new Exception("LL is Empty");
	}
	if(idx<0|| idx>=this.size)
	{
		throw new Exception("Invalid Index");
	}
	Node temp=this.head;
	for(int i=1;i<=idx;i++)
	{
		temp=temp.next;
	}
	return temp;
}
/* Add at a given Position */
public void addAt(int item ,int idx) throws Exception
{
	if(idx<0|| idx > size)
	{
		throw new Exception("Invalid Index");
	}
	if(idx==0)
	{
		addFirst(item);
	}
	else if(idx==this.size)
	{
		addLast(item);
	}
	else
	{
		Node nn=new Node();
		nn.data=item;
		nn.next=null;
		
		//attachment
		Node nm1=getNodeAt(idx-1);
		Node np1=nm1.next;
		
		nm1.next=nn;
		nn.next=np1;
		
		//summary object
		this.size++;
	}
	
}
/* Remove the item from first */

public int removeFirst() throws Exception
{
	if(this.size==0)
	{
		throw new Exception("LL is empty");
	}
	int rv=this.head.data;
	if(this.size==1)
	{
		this.head=null;
		this.tail=null;
		this.size=0;
	}
	else
	{
		this.head=this.head.next;
		this.size--;
	}
	return rv;
}
/*Remove the item from the last */
public int removeLast() throws Exception
{

	if(this.size==0)
	{
		throw new Exception("LL is empty");
	}
	int rv=this.tail.data;
	
	if(this.size==1)
	{
		this.head=null;
		this.tail=null;
		this.size=0;
	}
	else
	{
		Node sizem2= getNodeAt(this.size-2);
		this.tail=sizem2;
		this.tail.next=null;
		this.size--;
	}
	return rv;
}

}
