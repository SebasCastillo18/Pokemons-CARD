export const paginationLogic = (pokemonsFilter, currentPage) => {
    const pokemonPerPage = 12;
    const sliceStart = (currentPage - 1) * pokemonPerPage;
    const sliceEnd = sliceStart + pokemonPerPage;
    const pokemonsInPage = pokemonsFilter.slice(sliceStart, sliceEnd);

    const lastPage = Math.ceil(pokemonsFilter.length / pokemonPerPage) || 1;
    const pagesPerBlock = 5;
    const actualBlock = Math.ceil(currentPage / pagesPerBlock);

    const pagesInBlock = [];
    const minPage = actualBlock * pagesPerBlock - pagesPerBlock + 1;
    const maxPage = actualBlock * pagesPerBlock;

    for (let i = minPage; i <= maxPage; i++) {
        if (i <= lastPage) {
            pagesInBlock.push(i);
        }
    }

    return { pagesInBlock, lastPage, pokemonsInPage };
}
