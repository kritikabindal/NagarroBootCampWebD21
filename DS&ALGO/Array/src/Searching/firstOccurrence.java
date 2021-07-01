package Searching;

public class firstOccurrence {

	int firstOccurrence(int arr[],int n,int x)
	{
		for(int i=0;i<n;i++)
			if(arr[i]==x)
				return i;
			else
				return -1;
	}
	//recursive code 
	int firstocc(int arr[],int low,int high,int x)
	{
		if(low>high)
			return -1;
		arr[mid]= mid(low+high)/2;
		if(x>arr[mid])
			return firstOcc(arr,mid+1,high,x);
		else if(x<arr[mid])
			return firstOcc(arr,low,mid-1,x);
		else
		{
			if(mid==0||arr[mid-1]!=arr[mid])
				return mid;
			else
				return firstOcc(arr,low,mid-1,x);
		}
	}
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

	}

}
