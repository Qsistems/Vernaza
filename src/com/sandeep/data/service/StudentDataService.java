package com.sandeep.data.service;

import java.sql.DriverManager;
import java.util.ArrayList;
import java.util.List;

import com.sandeep.data.object.Student;

public class StudentDataService {

	
	public static List<Student> getStudentList() {

		String name = null;
		
		java.sql.Connection con;
		java.sql.Statement s;
		java.sql.Statement s2;
		java.sql.ResultSet rs;
		java.sql.ResultSet rs2;
		java.sql.PreparedStatement pst;

		con = null;
		s = null;
		s2 = null;
		pst = null;
		rs = null;
		rs2 = null;
		System.out.print("test");
		String url = "jdbc:sqlserver://localhost:1433;databaseName=calificacionTest";
		String id = "sa";
		String pass = "Gm0924321391";
		List<Student> listOfStudent = new ArrayList<Student>();

		Student aStudent = new Student();
		
		try {
			Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
			con = DriverManager.getConnection(url, id, pass);
			System.out.println("connected");
			s = con.createStatement();
			String queryString = "SELECT [CalifiSave_id],[subCalifi_id],[Califi_id_base],[Califi_fecha],[Califi_estado] ,[Califi_ciudad],[Califi_provincia] FROM [calificacionTest].[dbo].[CalificacionSave]";
			rs = s.executeQuery(queryString);
			while (rs.next()) {
				aStudent = new Student();
				aStudent.setid(rs.getString(2));

				aStudent.setMarca(rs.getString(3));
				aStudent.setFecha(rs.getString(4));
				aStudent.setProvincia(rs.getString(6));
				aStudent.setCiudad(rs.getString(7));
				//System.out.println("aStudent:"+rs.getString(2));
				listOfStudent.add(aStudent);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		 for(int i = 0; i < listOfStudent.size(); i++) {
	            System.out.println(listOfStudent.get(i).getid());
	        }

		return listOfStudent;

	}
}
