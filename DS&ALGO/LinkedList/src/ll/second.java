package ll;



class Node 
{
	int data;
	Node next;
	Node(int x)
	{
		data=x;
		next=null;
	}
}
public class second {
	
	public static void main(String args[])
	{
		Node head=null;
		head.next=new Node(10);
		head.next.next=new Node(20);
		head.next.next.next=new Node(30);
		print(head);
	}
	public static void print(Node head)
	{
		Node curr=head;
		while(curr!=null)
		{
			System.out.println(curr.data+"");
			curr=curr.next;
		}
	}
}
