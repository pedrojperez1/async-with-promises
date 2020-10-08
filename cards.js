let base_url = "https://deckofcardsapi.com/api/deck"
let $card = $('#card');
let $newCard = $('#new-card');
let deck_id;

axios.get(`${base_url}/new/shuffle/?deck_count=1`)
    .then(res => {
        deck_id = res.data.deck_id;
        $newCard.on("click", e => {
            axios.get(`${base_url}/${deck_id}/draw/?count=1`)
                .then(res => {
                    $card.attr("src", res.data.cards[0].image);
                    console.log(`${res.data.remaining} cards remain`);
                })
                .catch(err => {
                    console.log('ERROR!', err);
                    $card.attr("src", "");
                })
        })
    })
    .catch(err => console.log('ERROR!', err))



