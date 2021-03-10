package bst;

public class Client {
	
	public static void main(String args[])
	{
		int[] in= {10,20,30,40,50,60,70};
		BST bst=new BST(in);
		bst.display();
		//to find
		System.out.println(bst.find(10));
		//to max
		System.out.println(bst.max());
		
		//to add
		bst.add(27);
		bst.add(35);
	    bst.display();
	}

}
