
/* CUSTOM WEB COMPONENT BELOW = CUSTOM HTML TAG CALLED ( HEADER-POST ) */

class HeaderPost extends HTMLElement {
constructor() {
    super();
 this.attachShadow({
    mode: 'open'
})
    this.shadowRoot.innerHTML = 
`
    <header class="py-1 bg-light text-light d-flex">
        <div style="width: 90% !important" class="d-flex justify-content-between mx-auto">
            <div>
                <div>
                    <p class="h5">Abako</p>
                </div>
            </div>
            <div class="d-flex">
                <div><i class="bx bxs-user">Makkie Peippaaja</i></div>
                <div>
                    <i class="bx bxs-bell">10</i>
                </div>
                <div><i class="bx bxs-folder-open"></i></div>
                <div><i class="bx bx-search"></i></div>
            </div>
        </div>
    </header>
    `
}

}

customElements.define('header-post', HeaderPost );
/* CUSTOM HTML COMPONENT LOGIC STOPS */




      function commonClick(element, bgColor, textColor, title, imgURL) {
        document.getElementById("article-title").innerHTML = title;
        document.getElementById("article-img").src = imgURL;
        document.getElementById("common-click-list").style.backgroundColor =
          bgColor;
        element.style.color = textColor;

        document.getElementById("danger-list").style.backgroundColor = "white";
        document.getElementById("danger-click").style.color = "black";
        document.getElementById("fire-list").style.backgroundColor = "white";
        document.getElementById("fire-click").style.color = "black";
        document.getElementById("incident-list").style.backgroundColor =
          "white";
        document.getElementById("incident-click").style.color = "black";
        document.getElementById("personal-list").style.backgroundColor =
          "white";
        document.getElementById("personal-click").style.color = "black";
        document.getElementById("enviromental-list").style.backgroundColor =
          "white";
        document.getElementById("enviromental-click").style.color = "black";
        document.getElementById("translation-list").style.backgroundColor =
          "white";
        document.getElementById("translation-click").style.color = "black";
        document.getElementById("breakings-list").style.backgroundColor =
          "white";
        document.getElementById("breakings-click").style.color = "black";
        // TO CHANGE ARTICLE TEXT
        document.getElementById("paragraph-1").innerText =
          "This School management system software is used to manage information regarding students,office staff, Librarian,Account officer, administrators and other school personnel use this platform to communicate and perform tasks.School management system software assists the school in keeping all information related to the different departments of school in one place. The software system provides users with a log in credentials for accessing the files. The system is designed to automatically organize information as its input into the system.";
        document.getElementById("paragraph-2").innerText =
          "thisthis software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like";
        document.getElementById("paragraph-3").innerText =
          "class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work.";
        document.getElementById("paragraph-4").innerText =
          "Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. ";
      }
      function dangerClick(element, bgColor, textColor, title, imgURL) {
        document.getElementById("article-title").innerHTML = title;
        document.getElementById("article-img").src = imgURL;
        document.getElementById("danger-list").style.backgroundColor = bgColor;
        element.style.color = textColor;
        document.getElementById("common-click-list").style.backgroundColor =
          "white";
        document.getElementById("common-click").style.color = "black";
        document.getElementById("fire-list").style.backgroundColor = "white";
        document.getElementById("fire-click").style.color = "black";
        document.getElementById("incident-list").style.backgroundColor =
          "white";
        document.getElementById("incident-click").style.color = "black";
        document.getElementById("personal-list").style.backgroundColor =
          "white";
        document.getElementById("personal-click").style.color = "black";
        document.getElementById("enviromental-list").style.backgroundColor =
          "white";
        document.getElementById("enviromental-click").style.color = "black";
        document.getElementById("translation-list").style.backgroundColor =
          "white";
        document.getElementById("translation-click").style.color = "black";
        document.getElementById("breakings-list").style.backgroundColor =
          "white";
        document.getElementById("breakings-click").style.color = "black";
        // TO CHANGE ARTICLE TEXT
        document.getElementById("paragraph-1").innerText =
          "This School management system software is used to manage information regarding students,office staff, Librarian,Account officer, administrators and other school personnel use this platform to communicate and perform tasks.School management system software assists the school in keeping all information related to the different departments of school in one place. The software system provides users with a log in credentials for accessing the files. The system is designed to automatically organize information as its input into the system.";
        document.getElementById("paragraph-2").innerText =
          "thisthis software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like";
        document.getElementById("paragraph-3").innerText =
          "class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work.";
        document.getElementById("paragraph-4").innerText =
          "Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. ";
      }
      function fireClick(element, bgColor, textColor, title, imgURL) {
        document.getElementById("article-title").innerHTML = title;
        document.getElementById("article-img").src = imgURL;
        document.getElementById("fire-list").style.backgroundColor = bgColor;
        element.style.color = textColor;
        document.getElementById("common-click-list").style.backgroundColor =
          "white";
        document.getElementById("common-click").style.color = "black";
        document.getElementById("danger-list").style.backgroundColor = "white";
        document.getElementById("danger-click").style.color = "black";
        document.getElementById("incident-list").style.backgroundColor =
          "white";
        document.getElementById("incident-click").style.color = "black";
        document.getElementById("personal-list").style.backgroundColor =
          "white";
        document.getElementById("personal-click").style.color = "black";
        document.getElementById("enviromental-list").style.backgroundColor =
          "white";
        document.getElementById("enviromental-click").style.color = "black";
        document.getElementById("translation-list").style.backgroundColor =
          "white";
        document.getElementById("translation-click").style.color = "black";
        document.getElementById("breakings-list").style.backgroundColor =
          "white";
        document.getElementById("breakings-click").style.color = "black";
        // TO CHANGE ARTICLE TEXT
        document.getElementById("paragraph-1").innerText =
          "This School management system software is used to manage information regarding students,office staff, Librarian,Account officer, administrators and other school personnel use this platform to communicate and perform tasks.School management system software assists the school in keeping all information related to the different departments of school in one place. The software system provides users with a log in credentials for accessing the files. The system is designed to automatically organize information as its input into the system.";
        document.getElementById("paragraph-2").innerText =
          "thisthis software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like";
        document.getElementById("paragraph-3").innerText =
          "class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work.";
        document.getElementById("paragraph-4").innerText =
          "Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. ";
      }
      function incidentClick(element, bgColor, textColor, title, imgURL) {
        document.getElementById("article-title").innerHTML = title;
        document.getElementById("article-img").src = imgURL;
        document.getElementById("incident-list").style.backgroundColor =
          bgColor;
        element.style.color = textColor;
        document.getElementById("common-click-list").style.backgroundColor =
          "white";
        document.getElementById("common-click").style.color = "black";
        document.getElementById("danger-list").style.backgroundColor = "white";
        document.getElementById("danger-click").style.color = "black";
        document.getElementById("fire-list").style.backgroundColor = "white";
        document.getElementById("fire-click").style.color = "black";
        document.getElementById("personal-list").style.backgroundColor =
          "white";
        document.getElementById("personal-click").style.color = "black";
        document.getElementById("enviromental-list").style.backgroundColor =
          "white";
        document.getElementById("enviromental-click").style.color = "black";
        document.getElementById("translation-list").style.backgroundColor =
          "white";
        document.getElementById("translation-click").style.color = "black";
        document.getElementById("breakings-list").style.backgroundColor =
          "white";
        document.getElementById("breakings-click").style.color = "black";
        // TO CHANGE ARTICLE TEXT
        document.getElementById("paragraph-1").innerText =
          "This School management system software is used to manage information regarding students,office staff, Librarian,Account officer, administrators and other school personnel use this platform to communicate and perform tasks.School management system software assists the school in keeping all information related to the different departments of school in one place. The software system provides users with a log in credentials for accessing the files. The system is designed to automatically organize information as its input into the system.";
        document.getElementById("paragraph-2").innerText =
          "thisthis software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like";
        document.getElementById("paragraph-3").innerText =
          "class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work.";
        document.getElementById("paragraph-4").innerText =
          "Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. ";
      }
      function personalClick(element, bgColor, textColor, title, imgURL) {
        document.getElementById("article-title").innerHTML = title;
        document.getElementById("article-img").src = imgURL;
        document.getElementById("personal-list").style.backgroundColor =
          bgColor;
        element.style.color = textColor;
        document.getElementById("common-click-list").style.backgroundColor =
          "white";
        document.getElementById("common-click").style.color = "black";
        document.getElementById("danger-list").style.backgroundColor = "white";
        document.getElementById("danger-click").style.color = "black";
        document.getElementById("fire-list").style.backgroundColor = "white";
        document.getElementById("fire-click").style.color = "black";
        document.getElementById("incident-list").style.backgroundColor =
          "white";
        document.getElementById("incident-click").style.color = "black";
        document.getElementById("enviromental-list").style.backgroundColor =
          "white";
        document.getElementById("enviromental-click").style.color = "black";
        document.getElementById("translation-list").style.backgroundColor =
          "white";
        document.getElementById("translation-click").style.color = "black";
        document.getElementById("breakings-list").style.backgroundColor =
          "white";
        document.getElementById("breakings-click").style.color = "black";
        // TO CHANGE ARTICLE TEXT
        document.getElementById("paragraph-1").innerText =
          "This School management system software is used to manage information regarding students,office staff, Librarian,Account officer, administrators and other school personnel use this platform to communicate and perform tasks.School management system software assists the school in keeping all information related to the different departments of school in one place. The software system provides users with a log in credentials for accessing the files. The system is designed to automatically organize information as its input into the system.";
        document.getElementById("paragraph-2").innerText =
          "thisthis software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like";
        document.getElementById("paragraph-3").innerText =
          "class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work.";
        document.getElementById("paragraph-4").innerText =
          "Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. ";
      }
      function enviromentalClick(element, bgColor, textColor, title, imgURL) {
        document.getElementById("article-title").innerHTML = title;
        document.getElementById("article-img").src = imgURL;
        document.getElementById("enviromental-list").style.backgroundColor =
          bgColor;
        element.style.color = textColor;
        document.getElementById("common-click-list").style.backgroundColor =
          "white";
        document.getElementById("common-click").style.color = "black";
        document.getElementById("danger-list").style.backgroundColor = "white";
        document.getElementById("danger-click").style.color = "black";
        document.getElementById("fire-list").style.backgroundColor = "white";
        document.getElementById("fire-click").style.color = "black";
        document.getElementById("personal-list").style.backgroundColor =
          "white";
        document.getElementById("personal-click").style.color = "black";
        document.getElementById("incident-list").style.backgroundColor =
          "white";
        document.getElementById("incident-click").style.color = "black";
        document.getElementById("translation-list").style.backgroundColor =
          "white";
        document.getElementById("translation-click").style.color = "black";
        document.getElementById("breakings-list").style.backgroundColor =
          "white";
        document.getElementById("breakings-click").style.color = "black";
        // TO CHANGE ARTICLE TEXT
        document.getElementById("paragraph-1").innerText =
          "This School management system software is used to manage information regarding students,office staff, Librarian,Account officer, administrators and other school personnel use this platform to communicate and perform tasks.School management system software assists the school in keeping all information related to the different departments of school in one place. The software system provides users with a log in credentials for accessing the files. The system is designed to automatically organize information as its input into the system.";
        document.getElementById("paragraph-2").innerText =
          "thisthis software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like";
        document.getElementById("paragraph-3").innerText =
          "class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work.";
        document.getElementById("paragraph-4").innerText =
          "Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. ";
      }
      function translationClick(element, bgColor, textColor, title, imgURL) {
        document.getElementById("article-title").innerHTML = title;
        document.getElementById("article-img").src = imgURL;
        document.getElementById("translation-list").style.backgroundColor =
          bgColor;
        element.style.color = textColor;
        document.getElementById("common-click-list").style.backgroundColor =
          "white";
        document.getElementById("common-click").style.color = "black";
        document.getElementById("danger-list").style.backgroundColor = "white";
        document.getElementById("danger-click").style.color = "black";
        document.getElementById("fire-list").style.backgroundColor = "white";
        document.getElementById("fire-click").style.color = "black";
        document.getElementById("personal-list").style.backgroundColor =
          "white";
        document.getElementById("personal-click").style.color = "black";
        document.getElementById("enviromental-list").style.backgroundColor =
          "white";
        document.getElementById("enviromental-click").style.color = "black";
        document.getElementById("incident-list").style.backgroundColor =
          "white";
        document.getElementById("incident-click").style.color = "black";
        document.getElementById("breakings-list").style.backgroundColor =
          "white";
        document.getElementById("breakings-click").style.color = "black";
        // TO CHANGE ARTICLE TEXT
        document.getElementById("paragraph-1").innerText =
          "This School management system software is used to manage information regarding students,office staff, Librarian,Account officer, administrators and other school personnel use this platform to communicate and perform tasks.School management system software assists the school in keeping all information related to the different departments of school in one place. The software system provides users with a log in credentials for accessing the files. The system is designed to automatically organize information as its input into the system.";
        document.getElementById("paragraph-2").innerText =
          "thisthis software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like";
        document.getElementById("paragraph-3").innerText =
          "class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work.";
        document.getElementById("paragraph-4").innerText =
          "Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. ";
      }
      function breakingsClick(element, bgColor, textColor, title, imgURL) {
        document.getElementById("article-title").innerHTML = title;
        document.getElementById("article-img").src = imgURL;
        document.getElementById("breakings-list").style.backgroundColor =
          bgColor;
        element.style.color = textColor;
        document.getElementById("common-click-list").style.backgroundColor =
          "white";
        document.getElementById("common-click").style.color = "black";
        document.getElementById("danger-list").style.backgroundColor = "white";
        document.getElementById("danger-click").style.color = "black";
        document.getElementById("fire-list").style.backgroundColor = "white";
        document.getElementById("fire-click").style.color = "black";
        document.getElementById("personal-list").style.backgroundColor =
          "white";
        document.getElementById("personal-click").style.color = "black";
        document.getElementById("enviromental-list").style.backgroundColor =
          "white";
        document.getElementById("enviromental-click").style.color = "black";
        document.getElementById("translation-list").style.backgroundColor =
          "white";
        document.getElementById("translation-click").style.color = "black";
        document.getElementById("incident-list").style.backgroundColor =
          "white";
        document.getElementById("incident-click").style.color = "black";
        // TO CHANGE ARTICLE TEXT
        document.getElementById("paragraph-1").innerText =
          "This School management system software is used to manage information regarding students,office staff, Librarian,Account officer, administrators and other school personnel use this platform to communicate and perform tasks.School management system software assists the school in keeping all information related to the different departments of school in one place. The software system provides users with a log in credentials for accessing the files. The system is designed to automatically organize information as its input into the system.";
        document.getElementById("paragraph-2").innerText =
          "thisthis software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like software is Designed keeping in view the basic requirement of particular school.This software Provides a secure database structure with Login authenticated system that organizes stores and retrieves real time information.This software cover several modules Like";
        document.getElementById("paragraph-3").innerText =
          "class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work. class management,Account management,Event Management,Transportation Management,Library Management,Hostel Management.This School Management System has a large database system with Database Backup and Recovery that Can be Used for Schools Daily Work.";
        document.getElementById("paragraph-4").innerText =
          "Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. Its have multiple views for three different-different users :Manual Users Control  All the users will be control by admin …admin can give all rights to other users manually. ";
      }


