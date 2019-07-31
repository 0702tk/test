package com.internousdev.login2.dao;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.internousdev.login2.dto.LoginDTO;
import com.internousdev.login2.util.DBConnector;

public class LoginDAO {
	public LoginDTO select(String name,String password) throws SQLException{
		LoginDTO dto = new LoginDTO();
		DBConnector db = new DBConnector();
		Connection conn = db.getConnection();

		String sql = "select * from user where user_name2=? and password2=?";

		try{
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, name);
			ps.setString(2, password);

			ResultSet rs = ps.executeQuery();

			if(rs.next()){
				dto.setName2(rs.getString("user_name2"));
				dto.setPassword2(rs.getString("password2"));
			}
		}
		catch(SQLException ex){
			ex.printStackTrace();
		}
		finally{
			conn.close();
		}
	return dto;
	}
}
