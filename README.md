<h1>Electoral_Management_System[Backend]</h1>
The <b>Electoral_Management_System</b> is a Node.js-based system developed using the Express.js framework, with MongoDB as the chosen database. This is a backend application for a voting system where users can vote for candidates. It provides functionalities for user authentication, candidate management, and voting..

<h2>Features</h2>
 <ul>
      <li>User sign up and login with Aadhar Card Number and password</li>
      <li>User can view the list of candidates
      </li>
   <li>User can vote for a candidate (only once)</li>
      <li>Admin can manage candidates (add, update, delete)
      </li>
   <li>Admin cannot vote
      </li>
    </ul>

 
  <h2>Technologies Used</h2>
 <ul>
      <li>Node.js</li>
      <li>Express.js
      </li>
   <li>MongoDB</li>
      <li>JSON Web Tokens (JWT) for authentication
      </li> </ul>

<h1>Api Endpoints</h1>
      
  <h2>Authentication</h2>    

  <h3>Sign Up</h3>
    <ul>
      <li><b>POST /signup</b>: Sign up a user.</li>
    </ul>
  <h3>Login</h3>
    <ul>
      <li><b>POST /login</b>: Login a user.</li>
    </ul>

  <h2>Candidates</h2>

  <h3>Get Candidates</h3>
    <ul>
      <li><b>GET /candidates</b>: Add a new candidate (Admin only)</li>
    </ul>
  <h3>Add Candidate</h3>
    <ul>
      <li><b>POST /candidates</b>: Login a user.</li>
    </ul>
    <h3>Delete Candidate</h3>
    <ul>
      <li><b>DELETE /candidates/:id</b>: Delete a candidate by ID (Admin only)</li>
    </ul>
  <h3>Update Candidate</h3>
    <ul>
      <li><b>PUT /candidates/:id</b>: Update a candidate by ID (Admin only)</li>
    </ul>




   <h2>Voting</h2>

  <h3>Get Vote Count</h3>
    <ul>
      <li><b>GET /candidates/vote/count</b>:  Get the count of votes for each candidate</li>
    </ul>
  <h3>Vote for Candidate</h3>
    <ul>
      <li><b>POST /candidates/vote/:id</b>: Vote for a candidate (User only)</li>
    </ul>


 <h2>User Profile</h2>

  <h3>Get Profile</h3>
    <ul>
      <li><b>GET /users/profile</b>: Get user profile information</li>
    </ul>
  <h3>Change Password</h3>
    <ul>
      <li><b>PUT /users/profile/password</b>:  Change user password
About</li>
    </ul>

  
    
  
	
 







  



   
    

   

    
        


