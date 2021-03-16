package recursion;

import java.util.Scanner;

public class DisplayArrayReverse {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner (System.in);
		int n=sc.nextInt();
		int []arr=new int[n];
		for(int i=0;i<arr.length;i++)
		{
		arr[i]=sc.nextInt();	
		}
		DisplayArrayReverse(arr,0);
	}

	private static void DisplayArrayReverse(int[] arr, int idx) {
		
		// TODO Auto-generated method stub
		
		if(idx==arr.length)
		{
			return;
		}
		DisplayArrayReverse(arr,idx+1);
		System.out.println(arr[idx]);
	
		
		
		
	}

}
