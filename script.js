const perks=[
    {   
        number: `1`,
        title:`Actionable insights`,
        description: `Optimize your products, improve customer satisfaction and stay ahead of the competition 
        with our product data analytics.`
    },
    {
        number:`2`,
        title: `Data-driven decisions`,
        description: `Make data-driven decisions with our product data analytics. Our AI-generated reports help 
        you unlock insights hidden in your product data.`
    },
    {
        number:`3`,
        title: `Always affordable`,
        description: `Always affordable pricing that scales with your business. Get top-quality product data 
        analytics services without hidden costs or unexpected fees.`
    }
]

const perkSection = document.querySelector('.perks');

perks.forEach((perk, index) => {
    let newElement = document.createElement('li');
    newElement.classList.add('perk');
    newElement.innerHTML += `
    <p class="perk__number">${index+1}</p>
    <div>
      <header class="perk__header">${perk.title}</header>
      <p class="perk__para">${perk.description}</p>
    </div>
    `;
    perkSection.appendChild(newElement);
})
