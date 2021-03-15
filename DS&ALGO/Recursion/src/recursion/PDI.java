package recursion;

import java.util.Scanner;

public class PDI {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner (System.in);
	       int n=sc.nextInt();
	       PDI(n);
	}

	private static void PDI(int n) {
		// TODO Auto-generated method stub
		if(n==0)
		{
			return;
		}
		System.out.println(n);
		PDI(n-1);
		System.out.println(n);
		
	}

}
