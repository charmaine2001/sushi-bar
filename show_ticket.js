$('.check-order').on('click', function() {
    var ticketItem = '';
    var totalTicket = 0;
    var renderOrder = '';
    $('.units').each(function(i) {
      var quantity = $(this).val();
      if (quantity) {
        var checkOrder = function() {
          for (var y = 0; y < quantity; y++) {
            for (var x = 0; x < menu[i].units; x++) {
              renderOrder += `<img src="` + menu[i].icon + `">`;
            }
          }
        }
        var amount = menu[i].price * quantity;
        var discount = {
          units: 4,
          percentage: 30,
          apply: function() {
            amount = amount * (0.01 * (100 - this.percentage));
          },
          show: function() {
            ticketItem += `
              <tr>
                <td style="padding-left:15px">-discount applied</td>
                <td>-` + discount.percentage + `%</td>
                <td></td>
              </tr>
              `;
          }
        };
        var item = {
          show: function() {
            ticketItem += `
                <tr>
                  <td>` + menu[i].name + `<img src="` + menu[i].icon + `"></td>
                  <td>` + quantity + `</td>
                  <td>` + amount + `</td>
                </tr>
            `;
          }
        }
        item.show();
        if (quantity >= discount.units) {
          discount.apply();
          discount.show();
        }
        checkOrder();
        totalTicket += amount;
      };
    });
    var renderTicket = `
      <table style="width:100%">
        <tr style="text-align:left">
          <th>ITEM</th>
          <th>QNTY</th>
          <th>AMOUNT</th>
        </tr>
        ` + ticketItem + `
      </table>
      <div style="font-size:20px">The total price is ` + totalTicket.toFixed(2) + ` €</div>
    `;
    $('.menu-counter').html(renderOrder);
    $('.check-order').hide();
    $('.show-ticket').css("display", "");
    $('.show-ticket').on('click', function() {
      $('.menu-counter').html(renderTicket);
      $('.show-ticket').hide("");
    });
  });
  