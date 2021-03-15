package recursion;

import java.util.Scanner;

public class PrintDecreasing {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
      Scanner sc=new Scanner (System.in);
       int n=sc.nextInt();
       PrintDecreasing(n);
	}

	private static void PrintDecreasing(int n) {
		// TODO Auto-generated method stub
		if(n==0)
		{
			return;
		}
		System.out.println(n);
		PrintDecreasing(n-1);
		
	}

}
