package recursion;

import java.util.Scanner;

public class DisplayAnArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
Scanner sc=new Scanner (System.in);
int n=sc.nextInt();
int []arr=new int[n];
for(int i=0;i<arr.length;i++)
{
arr[i]=sc.nextInt();	
}
DisplayAnArray(arr,0);
	}

	private static void DisplayAnArray(int[] arr, int idx) {
		//Base Condition
		if(idx==arr.length)
		{
			return;
		}
		
		// TODO Auto-generated method stub
		System.out.println(arr[idx]);
		DisplayAnArray(arr,idx+1);
		
	}

}
