// app/javascript/controllers/navbar_controller.js
import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["menuSidebar", "searchOverlay", "scroll"]

  // toggle() {
  //   console.log("Toggle called"); // Debugging output
  //   if (this.hasMenuTarget) { // Ensure the target exists before trying to access it
  //     this.menuTarget.classList.toggle("hidden"); // Toggle visibility
  //   } else {
  //     console.error("Menu target not found"); // Log an error if not found
  //   }
  // }
  toggleSidebar() {
    console.log("Togglesidebar called"); 
    this.menuSidebarTarget.classList.toggle("open")
  }
  toggleSearch() {
    console.log("Search toggle called");
    this.searchOverlayTarget.classList.toggle("-translate-y-full"); // Hide
  }
  next(event) {
    const scrollContainerId = event.currentTarget.dataset.target;
    console.log("Scroll container ID:", scrollContainerId); // Check ID
    
    const scrollContainer = document.getElementById(scrollContainerId);
    const itemWidth = 250 + 32;
  
    if (scrollContainer) {
      console.log("Scrolling:", scrollContainer); // Check if container exists
      scrollContainer.scrollBy({ left: itemWidth * 4, behavior: "smooth" });
    } else {
      console.error("Scroll container not found for ID:", scrollContainerId);
    }
  
  }
}
