/*Popover*/

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');

const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

/*End of the Popover*/
/*Tootip*/

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

/*End of the Tootip*/