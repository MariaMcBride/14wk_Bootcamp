<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
      <%@ page isErrorPage="true" %>
        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8">
          <title>Project Manager</title>
          <!-- for Bootstrap CSS -->
          <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
          <!-- YOUR own local CSS -->
          <link rel="stylesheet" type="text/css" href="/css/style.css">
          <!-- For any Bootstrap that uses JS or jQuery-->
          <script src="/webjars/jquery/jquery.min.js"></script>
          <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
          <!-- YOUR own local JS -->
          <script type="text/javascript" src="/js/app.js"></script>
        </head>

        <body>
          <div class="container p-5">
            <h1 class="mb-3 log-reg text-center">Project Manager</h1>
            <p class="text-center">A place for teams to manage projects.</p>
            <div class="card mx-auto p-4 rounded-0">
              <div class="d-flex align-items-start justify-content-around">
                <div class="mb-3 register">
                  <h2 class="mb-4">Register</h2>
                  <form:form action="/register" method="POST" modelAttribute="newUser">
                    <div class="mb-3 row">
                      <form:label path="firstName" for="formInput" class="form-label">First Name
                      </form:label>
                      <form:errors path="firstName" class="alert-danger" />
                      <form:input type="text" class="form-control" id="formInput" path="firstName" />
                    </div>
                    <div class="mb-3 row">
                      <form:label path="lastName" for="formInput" class="form-label">Last Name</form:label>
                      <form:errors path="lastName" class="alert-danger" />
                      <form:input type="text" class="form-control" id="formInput" path="lastName" />
                    </div>
                    <div class="mb-3 row">
                      <form:label path="email" for="formInput" class="form-label">Email</form:label>
                      <form:errors path="email" class="alert-danger" />
                      <form:input type="email" class="form-control" id="formInput" path="email" />
                    </div>
                    <div class="mb-3 row">
                      <form:label path="password" for="inputPassword" class="form-label">Password
                      </form:label>
                      <form:errors path="password" class="alert-danger" />
                      <form:input type="password" class="form-control" id="inputPassword" path="password" />
                    </div>
                    <div class="mb-3 row">
                      <form:label path="confirm" for="inputPassword" class="col-form-label">Confirm Password
                      </form:label>
                      <form:errors path="confirm" class="alert-danger" />
                      <form:input type="password" class="form-control" id="inputPassword" path="confirm" />
                    </div>
                    <div class="d-flex justify-content-end"><input type="submit" value="Submit" class="btn reg-btn">
                    </div>
                  </form:form>
                </div>
                <div class="mb-3 login">
                  <h2 class="mb-4">Log in</h2>
                  <form:form action="/login" method="POST" modelAttribute="newLogin">
                    <div class="mb-3 row">
                      <form:label path="email" for="formInput" class="form-label">Email</form:label>
                      <form:errors path="email" class="alert-danger" />
                      <form:input type="email" class="form-control" id="formInput" path="email" />
                    </div>
                    <div class="mb-3 row">
                      <form:label path="password" for="inputPassword" class="form-label">Password
                      </form:label>
                      <form:errors path="password" class="alert-danger" />
                      <form:input type="password" class="form-control" id="inputPassword" path="password" />
                    </div>
                    <div class="d-flex justify-content-end"><input type="submit" value="Submit" class="btn log-btn">
                    </div>
                  </form:form>
                </div>
              </div>
            </div>
          </div>
        </body>

        </html>