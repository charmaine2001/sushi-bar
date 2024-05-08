var MenuItem = function(name, price, units, icon) {
    this.name = name;
    this.price = price;
    this.units = units;
    this.icon = icon;
  };
  
  var menu = [
    new MenuItem('Maki Tuna', 3.05, 4, "pics/maki.png"),
    new MenuItem('Maki Salmon', 2.90, 4, "pics/maki01.png"),
    new MenuItem('Maki Cucumber', 2.05, 4, "pics/maki02.png"),
    new MenuItem('Maki Tamago', 2.50, 4, "pics/maki03.png"),
    new MenuItem('Nigiri Tuna', 3.50, 2, "pics/sushi (2).png"),
    new MenuItem('Nigiri Salmon', 3.00, 2, "pics/sushi (3).png"),
    new MenuItem('Nigiri Cucumber', 2.20, 2, "pics/sushi (4).png"),
    new MenuItem('Nigiri Tamago', 2.50, 2, "pics/sushi.png"),
  ];
  
  var render = function() {
    var renderItem = '';
    for (var i = 0; i < menu.length; i++) {
    renderItem += `
      <div>
        <p>` + menu[i].name + ` (incl. ` + menu[i].units + ` units)</p>
        <p>Price: ` + menu[i].price + ` €</p>
        <img src="` + menu[i].icon + `">
        <input class="units" type="number" name="units">
      </div>
      `;
    }
    return renderItem;
  };
  
  $('.menu-counter').html(render);