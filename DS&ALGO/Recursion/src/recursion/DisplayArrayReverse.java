package recursion;

import java.util.Scanner;

public class DisplayArrayReverse {

	public static void main(String[] args) {
		// TODO Auto-generated method s
		Scanner sc=new Scanner (System.in);
		int n=sc.nextInt();
		int []arr=new int[n];
		Sum(arr);
		
		
	}

	private static void Sum() {
		
		// TODO Auto-generated method stub
	  int arr[]= {3,5,-3,-5};
		int sum = 0;
		for(int i=0;i<arr.length;i++)
		{
			for(int j=0;j<arr.length;j++) {
	          if(arr[i]+arr[j]==sum)
	  System.out.println("("+arr[i]+","arr[j]+")");
	         
			}
		}
	
	}

}






















import java.util.*;
public class Main{
    public static void main(String[] args){
        String input1="aaabccd";
        String input2="abc";
        String input3="ac";
        String input4="aaa";
        int res=fun(input1,input2,input3,input4);
        System.out.println(res);

    }


    public static int fun(String input1,String input2,String input3,String input4){
        if(input1.length()>0){
			String temp1;
			String temp2;
			String temp3;
			int stindx;
			// int endindx;
			int len=input1.length();

			if(input1.length()>input2.length()){
		 		stindx=input1.indexOf(input2);
				System.out.println(stindx);
		 		// endindx=input1.lastIndexOf(input2);
				// System.out.println(endindx);
				temp1=input1.substring(0,stindx)+input1.substring(stindx+input2.length());
				System.out.println(temp1);
				len=input1.length();

				if(temp1.length()>input3.length()){
			 		stindx=temp1.indexOf(input3);
					// endindx=temp1.lastIndexOf(input3);
					temp2=temp1.substring(0,stindx)+temp1.substring(stindx+input3.length());
					System.out.println(stindx);
					// System.out.println(endindx);
					System.out.println(temp2);
					len=temp2.length();

					if(temp2.length()>input4.length()){
						stindx=temp2.indexOf(input4);
						// endindx=temp2.lastIndexOf(input4);
						temp3=temp2.substring(0,stindx)+temp2.substring(stindx+input4.length());
						System.out.println(stindx);
						// System.out.println(endindx);
						System.out.println(temp3);
						len=temp3.length();
						System.out.println(len);
		
						
					}	
				}
	
			}	
			return len;	
		}
		else{
			return 1;
		}
    }
}








