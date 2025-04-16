import java.sql.*;

public class CreateDB {
    public static void main(String[] args) {
        // MySQL database connection parameters
        String url = "jdbc:mysql://localhost:3306/quiz_database";
        String user = "nidhikhadabadi";
        String password = "khadabadi";

        try {
            // Load and register the MySQL JDBC driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Establish a connection to the database
            Connection connection = DriverManager.getConnection(url, user, password);

            // Create a statement
            Statement statement = connection.createStatement();

            // Execute a query to retrieve student information
            String query = "SELECT name, email, roll_no FROM students";
            ResultSet resultSet = statement.executeQuery(query);

            // Display student information
            while (resultSet.next()) {
                String name = resultSet.getString("name");
                String email = resultSet.getString("email");
                int rollNo = resultSet.getInt("roll_no");

                System.out.println("Name: " + name + ", Email: " + email + ", Roll No: " + rollNo);
            }

            // Close the connection, statement, and result set
            resultSet.close();
            statement.close();
            connection.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
