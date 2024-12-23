function initPostFilter() {
    const filterButtons = document.querySelectorAll('.tag-filter-item');
    const posts = document.querySelectorAll('.post-list-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedTag = button.dataset.tag;

            // Show all posts if 'all' is selected
            if (selectedTag === 'all') {
                posts.forEach(post => post.style.display = 'flex');
                return;
            }

            // Filter posts based on selected tag
            posts.forEach(post => {
                const postTags = post.dataset.tags.split(' ');
                if (postTags.includes(selectedTag)) {
                    post.style.display = 'flex';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPostFilter);