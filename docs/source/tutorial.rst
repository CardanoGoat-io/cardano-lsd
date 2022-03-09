==========
Quickstart
==========

------------
Installation
------------

cardano-lsd could be installed using ``npm`` as follows:

.. code-block:: shell

   $ npm install cardano-lsd


---------------
Using cardano-lsd
---------------

import the whole package or just a class inside

.. code-block:: javascript

    import { CardaNostraAdaSpinner } from "cardano-lsd";

    const spinnerOne = new CardaNostraAdaSpinner({id:"element-id", color: "red", delay: 0, duration: 5})

    // After div with id has loaded call
    spinnerOne.attachSVG();

.. code-block:: html

    <div id="element-id"></div>

.. warning::

   It is a class so it needs to be called with new CardaNostraAdaSpinner({id:"element-id"})
   It also must include at least the element Id to initiate.


