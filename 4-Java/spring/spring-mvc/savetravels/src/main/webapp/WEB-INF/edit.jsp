<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
      <%@ page isErrorPage="true" %>
        <!DOCTYPE html>
        <html>

        <head>
          <meta charset="UTF-8">
          <title>Edit Expense</title>
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
          <div class="container mx-auto p-5">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h2 class="heading">Edit Expense</h2>
              <a href="/expenses">Go back</a>
            </div>
            <div class="card mx-auto p-5">
              <form:form action="/expenses/${expense.id}" method="POST" modelAttribute="expense">
                <input type="hidden" name="_method" value="put">
                <div class="mb-3">
                  <form:label path="name" for="formInput" class="form-label">Expense Name:
                  </form:label>
                  <form:input type="text" class="form-control" id="formInput" path="name" />
                  <form:errors path="name" class="text-danger" />
                </div>
                <div class="mb-3">
                  <form:label path="vendor" for="formInput" class="form-label">Vendor:
                  </form:label>
                  <form:input type="text" class="form-control" id="formInput" path="vendor" placeholder="" />
                  <form:errors path="vendor" class="text-danger" />
                </div>
                <div class="mb-3">
                  <form:label path="amount" for="formInput" class="form-label">Amount:
                  </form:label>
                  <form:input type="double" class="form-control" id="formInput" path="amount" placeholder="" />
                  <form:errors path="amount" class="text-danger" />
                </div>
                <div class="mb-3">
                  <form:label path="description" for="formControlTextarea" class="form-label">
                    Description:</form:label>
                  <form:textarea path="description" class="form-control" id="formControlTextarea" rows="3" />
                  <form:errors path="description" class="text-danger" />
                </div>
                <div class="d-flex justify-content-end">
                  <input type="submit" value="Update" class="btn btn-success text-white fw-bold">
                </div>
              </form:form>
            </div>
          </div>
        </body>

        </html>