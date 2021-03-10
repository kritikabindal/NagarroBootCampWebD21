package bst;

public class BST {
	public class Node
	{
		int data;
		Node left;
		Node right;
		
	}
	private Node root;
	
	/*for publically access*/
	public BST(int[] arr)
	{
		this.root=construct (arr,0,arr.length-1);
	}
	
	/*for accesss in class*/
	public Node construct(int arr[], int lo, int hi) 
	{
		// TODO Auto-generated method stub
		//Base case
		if(lo>hi) {
		return null;
		}
		
		//mid
		int mid=(lo+hi)/2;

		//Create a new node
		
		Node nn=new Node();
		nn.data=arr[mid];
		nn.left=construct(arr,lo,mid-1);
		nn.right=construct(arr,mid+1,hi);
		return nn;
	}

	//display the bst
	public void display()
	{
		display(this.root);
	}
	
	private void display(Node node)
	{
		if(node==null)
		{
			return;
		}
		//self-work
		String str=" ";
		//for the left subtree
		if(node.left==null)
		{
			str+=".";
		}
		else
			str+="->"+node.left.data+"<-";
		//for the right subtree
		if(node.right==null)
		{
			str+=".";
		}
		else
			str+=node.right.data;
		System.out.println( str);
		//recursive call for left
		display(node.left);
		//recursive call for right
		display(node.right);
	}
	
	
	//Find in BST
	public boolean find(int item)
	{
		return find(this.root,item);
	}
	
	private boolean find (Node node ,int item)
	{
		if(node==null) {
			return false;
		}
		if(item>node.data)
		{
			return find(node.right,item);
		}
		else if(item<node.data)
		{
			return find(node.left,item);
		}
		else
		{
			return true;
		}
	}
	//for max
	public int max()
	{
		return max(this.root);
	}
	
	private int max(Node node)
	{
		if(node.right==null)
		{
			return node.data;
		}
		return max(node.right);
	}
	
	//add the node and item
	public void add (int item)
	{
		add(this.root,item);
	}
	private void add(Node node,int item) {
		
		//node at the right side
		if(item>node.data)
		{
			if(node.right==null)
			{
				Node nn=new Node();
				nn.data=item;
				node.right=nn;
			}
			else
			{
				add(node.right,item);
			}
		}
		//node at the left side
		
		else
		{
				if(node.left==null)
				{
					Node nn=new Node();
					nn.data=item;
					node.left=nn;
				}
				else
				{
					add(node.left,item);
				}
			}
	   }
}
	
	
	