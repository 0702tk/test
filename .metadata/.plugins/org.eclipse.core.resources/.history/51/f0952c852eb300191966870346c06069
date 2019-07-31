package com.internousdev.login2.util;
import java.sql.Connection;
import java.sql.SQLException;

public class DBConnector {
	private static String driverName = "com.mysql.jdbc.Driver";
	private static String url = "jdbc:mysql://localhost/logindb2_kawakami";

	private static String user = "root";
	private static String password = "mysql";

	public Connection getConnection(){
		Connection conn = null;

	try{
		Class.forName(driverName);
		conn = (Connection) DriverManagger.getConnection(url,user,password);
	}
	catch(ClassNotFoundException e){
		e.printStackTrace();
	}
	catch(SQLException e){
		e.printStackTrace();
	}
	return conn;
	}

}
