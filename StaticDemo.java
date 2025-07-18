

                          

public class StaticDemo
{
    
    static int deptId;
    
    
    
    public int getId(){
        return deptId;
    }
    
    
    public void setId(int id){
        this.deptId=id;
    }
    
    public static void main(String[] args) {
        
        
        StaticDemo obj=new  StaticDemo();
        obj.setId(55);
        
        System.out.println(obj.getId());
	    
		System.out.println(StaticDemo.deptId);
	}
    
}

 