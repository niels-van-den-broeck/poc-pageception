- Communication. Works trough postMessage() in the child, and window.addEventListener('message, function) in the parent.
- Objects can be passed trough to the other application which on it's turn can handle them. This method works for all the options, which seem to be `<embed>`, `<iframe>` and `<object>`. 
- Perfect communication is only viable when there is complete control over both sides. 

# Conclusion

- Requires A LOT of custom implementation.
- Standards are not really established since anything other than window communication is a potential security leak.
