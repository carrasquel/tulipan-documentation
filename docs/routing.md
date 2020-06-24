# Routing

Another important feature in Single Page Application development is routing, this client-side routing allows users to navigate through our application where no full page reload will happend, this way you can use *$http* service to fetch partial information from the server, you can also use history buttons without full page reload.

The routing configuration is done in the istance configuration object, but the navigation is done through the *navigate* service.

## A simple SPA with Routing

[JSONPlaceholder](https://jsonplaceholder.typicode.com/) is a Fake Online REST API for Testing and Prototyping and we will use to show its entities in a SPA.

We will use the following resources from JSONPlaceholder.

| Resource | Description | url |
| ---- | ----------- | ---------------------------- |
| posts | 100 posts | https://jsonplaceholder.typicode.com/posts |
| comments | 500 comments | https://jsonplaceholder.typicode.com/comments?postId=1 |
| todos | 200 todos | https://jsonplaceholder.typicode.com/todos |
| users | 10 users | https://jsonplaceholder.typicode.com/users |

Since this resources have relations, we can create a simple interface to navigate through these relations, like posts and comments related to posts, or posts related to users.

<div class="tabset">
  <!-- Tab 1 -->
  <input type="radio" name="tabset" id="tab1" aria-controls="posts" checked>
  <label for="tab1">Posts</label>
  <!-- Tab 2 -->
  <input type="radio" name="tabset" id="tab2" aria-controls="todos">
  <label for="tab2">Todos</label>
  <!-- Tab 3 -->
  <input type="radio" name="tabset" id="tab3" aria-controls="users">
  <label for="tab3">Users</label>
  
  <div class="tab-panels">
    <section id="posts" class="tab-panel">
      <h2>Posts</h2>
      <p><strong>Overall Impression:</strong> An elegant, malty German amber lager with a clean, rich, toasty and bready malt flavor, restrained bitterness, and a dry finish that encourages another drink. The overall malt impression is soft, elegant, and complex, with a rich aftertaste that is never cloying or heavy.</p>
      <p><strong>History:</strong> As the name suggests, brewed as a stronger “March beer” in March and lagered in cold caves over the summer. Modern versions trace back to the lager developed by Spaten in 1841, contemporaneous to the development of Vienna lager. However, the Märzen name is much older than 1841; the early ones were dark brown, and in Austria the name implied a strength band (14 °P) rather than a style. The German amber lager version (in the Viennese style of the time) was first served at Oktoberfest in 1872, a tradition that lasted until 1990 when the golden Festbier was adopted as the standard festival beer.</p>
    </section>
    <section id="todos" class="tab-panel">
      <h2>Todos</h2>
      <p><strong>Overall Impression:</strong>  An elegant, malty German amber lager with a balanced, complementary beechwood smoke character. Toasty-rich malt in aroma and flavor, restrained bitterness, low to high smoke flavor, clean fermentation profile, and an attenuated finish are characteristic.</p>
      <p><strong>History:</strong> A historical specialty of the city of Bamberg, in the Franconian region of Bavaria in Germany. Beechwood-smoked malt is used to make a Märzen-style amber lager. The smoke character of the malt varies by maltster; some breweries produce their own smoked malt (rauchmalz).</p>
    </section>
    <section id="users" class="tab-panel">
      <h2>Users</h2>
      <p><strong>Overall Impression:</strong> A dark, strong, malty German lager beer that emphasizes the malty-rich and somewhat toasty qualities of continental malts without being sweet in the finish.</p>
      <p><strong>History:</strong> Originated in the Northern German city of Einbeck, which was a brewing center and popular exporter in the days of the Hanseatic League (14th to 17th century). Recreated in Munich starting in the 17th century. The name “bock” is based on a corruption of the name “Einbeck” in the Bavarian dialect, and was thus only used after the beer came to Munich. “Bock” also means “Ram” in German, and is often used in logos and advertisements.</p>
    </section>
  </div>
  
</div>

