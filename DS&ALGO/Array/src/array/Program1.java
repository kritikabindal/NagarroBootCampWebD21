package array;

import java.util.Scanner;

public class Program1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Scanner sc=new Scanner (System.in);
		int n=sc.nextInt();
		int m=sc.nextInt();
		int[] [] arr=new int[n][m];
		//to take input
		for(int i=0;i<n;i++)
		{
			for(int j=0;j<m;j++)
			{
				arr[i][j]=sc.nextInt();
			}
		}
		//display
		
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<m;j++)
		{
			System.out.print(arr[i][j]+" ");
		}
		System.out.println();
	}

}
}