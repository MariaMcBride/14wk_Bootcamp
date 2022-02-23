<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
  <!-- c:out ; c:forEach etc. -->
  <%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
    <!-- Formatting (dates) -->
    <%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
      <!DOCTYPE html>
      <html>

      <head>
        <meta charset="UTF-8">
        <title>Project Manager Dashboard</title>
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
        <!-- Enter body here -->
        <div class="container p-5">
          <div class="card mx-auto p-4 rounded-0">
            <div class="flex mb-0">
              <div>
                <h1 class="mb-3">Welcome,
                  <c:out value="${loggedUser.firstName}" />!
                </h1>
                <p>All Projects:</p>
              </div>
              <div class="text-end">
                <form action="/logout" method="POST">
                  <button class="border-0 bg-transparent text-primary mb-3">Logout</button>
                </form>
                <a href="/projects/new" class="btn btn-info">+ New Project</a>
              </div>
            </div>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Project</th>
                  <th scope="col">Team Lead</th>
                  <th scope="col">Due Date</th>
                  <th scope="col" class="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <c:forEach var="project" items="${projects}">
                  <tr>
                    <c:if test="${project.leader.id != user_id && project.members.contains(loggedUser) == false}">
                      <td>
                        <a href="/projects/${project.id}">
                          <c:out value="${project.title}" />
                        </a>
                      </td>
                      <td>
                        <c:out value="${project.leader.firstName}" />
                      </td>
                      <td>
                        <fmt:formatDate pattern="MMM dd" value="${project.dueDate}" />
                      </td>
                      <td class="text-center">
                        <form action="/projects/join/${project.id}" method="POST">
                          <input type="hidden" name="_method" value="put">
                          <input type="hidden" name="id" value="${project.id}" />
                          <input type="submit" value="Join Team" class="link-primary border-0 bg-transparent">
                        </form>
                      </td>
                    </c:if>
                  </tr>
                </c:forEach>
              </tbody>
            </table>
            <div class="mt-4">
              <p>Your Projects:</p>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Project</th>
                    <th scope="col">Lead</th>
                    <th scope="col">Due Date</th>
                    <th scope="col" class="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <c:forEach var="project" items="${projects}">
                    <tr>
                      <c:if test="${project.leader.id == user_id}">
                        <td>
                          <a href="/projects/${project.id}">
                            <c:out value="${project.title}" />
                          </a>
                        </td>
                        <td>
                          <c:out value="${project.leader.firstName}" />
                        </td>
                        <td>
                          <fmt:formatDate pattern="MMM dd" value="${project.dueDate}" />
                        </td>
                        <td class="text-center">
                          <a href="/projects/edit/${project.id}" class="link-warning">Edit</a>
                        </td>
                      </c:if>
                    </tr>
                  </c:forEach>
                  <c:forEach var="project" items="${loggedUser.projects}">
                    <tr>
                      <td>
                        <a href="/projects/${project.id}">
                          <c:out value="${project.title}" />
                        </a>
                      </td>
                      <td>
                        <c:out value="${project.leader.firstName}" />
                      </td>
                      <td>
                        <fmt:formatDate pattern="MMM dd" value="${project.dueDate}" />
                      </td>
                      <td class="text-center">
                        <form action="/projects/leave/${project.id}" method="POST">
                          <input type="hidden" name="_method" value="put">
                          <input type="hidden" name="id" value="${project.id}" />
                          <input type="submit" value="Leave Team" class="link-danger border-0 bg-transparent">
                        </form>
                      </td>
                    </tr>
                  </c:forEach>
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </body>

      </html>